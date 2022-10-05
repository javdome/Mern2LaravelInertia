// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { Inertia } from '@inertiajs/inertia'

const WorkoutDetails = ({ workout }) => {

  const handleClick = () => {
    Inertia.delete(route("workouts.destroy", workout.id));
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.created_at), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails