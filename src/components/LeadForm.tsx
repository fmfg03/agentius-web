import { useState } from 'react'
import { supabase } from '../supabase/supabaseClient'

export default function LeadForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'enviado' | 'error'>('idle')

  const enviarLead = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstado('enviando')

    const { error } = await supabase.from('leads').insert([
      {
        nombre,
        email,
        mensaje,
        origen: 'Landing Agentius'
      }
    ])

    if (error) {
      console.error(error)
      setEstado('error')
    } else {
      setEstado('enviado')
      setNombre('')
      setEmail('')
      setMensaje('')
    }
  }

  return (
    <form onSubmit={enviarLead} className="space-y-4 max-w-md mx-auto text-left">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full border border-gray-300 p-2 rounded"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        className="w-full border border-gray-300 p-2 rounded"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="¿Qué quieres automatizar?"
        className="w-full border border-gray-300 p-2 rounded"
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}
        rows={4}
      />
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        disabled={estado === 'enviando'}
      >
        {estado === 'enviando' ? 'Enviando...' : 'Automatizar ahora'}
      </button>

      {estado === 'enviado' && <p className="text-green-600 mt-2">✅ Recibido. Te contactamos pronto.</p>}
      {estado === 'error' && <p className="text-red-600 mt-2">⚠️ Error al enviar. Intenta de nuevo.</p>}
    </form>
  )
}
