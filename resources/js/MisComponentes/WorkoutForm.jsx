// import { useState } from "react"
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
// import { useAuthContext } from '../hooks/useAuthContext'

import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

const WorkoutForm = () => {
//   const { dispatch } = useWorkoutsContext()
//   const { user } = useAuthContext()

//   const [title, setTitle] = useState('')
//   const [load, setLoad] = useState('')
//   const [reps, setReps] = useState('')
//   const [error, setError] = useState(null)
//   const [emptyFields, setEmptyFields] = useState([])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!user) {
//       setError('You must be logged in')
//       return
//     }

//     const workout = {title, load, reps}

//     const response = await fetch('/api/workouts', {
//       method: 'POST',
//       body: JSON.stringify(workout),
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${user.token}`
//       }
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setError(json.error)
//       setEmptyFields(json.emptyFields)
//     }
//     if (response.ok) {
//       setTitle('')
//       setLoad('')
//       setReps('')
//       setError(null)
//       setEmptyFields([])
//       dispatch({type: 'CREATE_WORKOUT', payload: json})
//     }
//   }

const { data, setData, post, processing, errors } = useForm({
    title: '',
    load: 0,
    reps: 0,
  })
  
  function submit(e) {
    e.preventDefault()
    post('/workouts')
  }

  return (
    <form className="create" onSubmit={submit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} />
      {errors.title && <div>{errors.title}</div>}
      {/* <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      /> */}

      <label>Load (in kg):</label>
      <input type="number" value={data.load} onChange={e => setData('load', e.target.value)} />
      {errors.load && <div>{errors.load}</div>}
      {/* <input 
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      /> */}

      <label>Reps:</label>
      <input type="number" value={data.reps} onChange={e => setData('reps', e.target.value)} />
      {errors.reps && <div>{errors.reps}</div>}
      {/* <input 
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      /> */}
      <button type="submit" disabled={processing}>Add Workout</button>
      {/* <button>Add Workout</button> */}
      {/* {error && <div className="error">{error}</div>} */}
    </form>
  )
}

export default WorkoutForm