const d = document
const $outputBox = d.getElementById('output')
const $inputBox = d.getElementById('to-encrypt')
const $encBtn = d.getElementById('enc-btn')
const $decBtn = d.getElementById('dec-btn')

const ENC_KEYS = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
}

const DEC_KEYS = {
  ai: 'a',
  enter: 'e',
  imes: 'i',
  ober: 'o',
  ufat: 'u',
}

$encBtn.addEventListener('click', () => {
  const decryptedMessage = encMessage($inputBox.value)
  const $p = d.createElement('P')
  $p.textContent = decryptedMessage
  $p.classList.add('processed')
  $outputBox.innerHTML = ''
  $outputBox.appendChild($p)
})

$decBtn.addEventListener('click', () => {
  const encryptedMessage = decMessage($inputBox.value)
  const $p = d.createElement('P')
  $p.textContent = encryptedMessage
  $p.classList.add('processed')
  $outputBox.innerHTML = ''
  $outputBox.appendChild($p)
})

function encMessage (message) {
  let characters = message.split('')
  let newMessage = characters.map(char => {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return char.replace(char, ENC_KEYS[char])
      default:
        return char
    }
  }).join('')

  return newMessage
}

function decMessage (message) {
  let newMessage = message.replace(/(ai|enter|imes|ober|ufat)/g,(match) => DEC_KEYS[match])
  return newMessage
}