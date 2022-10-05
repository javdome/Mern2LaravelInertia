import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

const WorkoutForm = () => {

const { data, setData, post, processing, errors } = useForm({
    title: '',
    load: 0,
    reps: 0,
  })
  
  function submit(e) {
    e.preventDefault()
    post(route('workouts.store'))
  }

  return (
    <form className="create" onSubmit={submit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} />
      {errors.title && <div className='error'>{errors.title}</div>}

      <label>Load (in kg):</label>
      <input type="number" value={data.load} onChange={e => setData('load', e.target.value)} />
      {errors.load && <div className='error'>{errors.load}</div>}

      <label>Reps:</label>
      <input type="number" value={data.reps} onChange={e => setData('reps', e.target.value)} />
      {errors.reps && <div className='error'>{errors.reps}</div>}

      <button type="submit" disabled={processing}>Add Workout</button>

    </form>
  )
}

export default WorkoutForm