import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const WORDS = ['secure web apps', 'beautiful interfaces', 'cybersecurity tools', 'digital stories']

export default function Typewriter() {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = WORDS[i]
    const t = setTimeout(() => {
      if (!del && text === word) return setDel(true)
      if (del && text === '') { setDel(false); return setI((i + 1) % WORDS.length) }
      setText(word.slice(0, text.length + (del ? -1 : 1)))
    }, !del && text === word ? 1400 : del ? 35 : 70)
    return () => clearTimeout(t)
  }, [text, del, i])

  return (
    <p className="typewriter">
      I build <span className="text-gradient">{text}</span>
      <motion.span className="caret" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }} />
    </p>
  )
}
