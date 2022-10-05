import React from 'react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MiLayout from '@/Layouts/MiLayout';
import { Head } from '@inertiajs/inertia-react';

import WorkoutDetails from '@/MisComponentes/WorkoutDetails';
import WorkoutForm from '@/MisComponentes/WorkoutForm';

export default function Workouts (props) {
    return (
        <MiLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="home">
                <div className="workouts">
                    {props.workouts && props.workouts.map((workout) => (
                        <WorkoutDetails key={workout.id} workout={workout} />
                    ))}
                </div>
                <WorkoutForm />
            </div>
        </MiLayout>
    );
}
