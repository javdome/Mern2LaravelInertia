// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { Inertia } from '@inertiajs/inertia'

const WorkoutDetails = ({ workout }) => {
//   const { dispatch } = useWorkoutsContext()
//   const { user } = useAuthContext()

//   const handleClick = async () => {
//     if (!user) {
//       return
//     }

//     const response = await fetch('/api/workouts/' + workout._id, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${user.token}`
//       }
//     })
//     const json = await response.json()

//     if (response.ok) {
//       dispatch({type: 'DELETE_WORKOUT', payload: json})
//     }
//   }
  const handleClick = () => {
    Inertia.delete(route("workouts.destroy", workout.id));
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.created_at), { addSuffix: true })}</p>
      {/* <span className="material-symbols-outlined">delete</span> */}
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails