import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const data = [
        {
            name: 'Assignment-1',
            Marks: 60,

        },
        {
            name: 'Assignment-2',
            Marks: 59,

        },
        {
            name: 'Assignment-3',
            Marks: 60,

        },
        {
            name: 'Assignment-4',
            Marks: 58,

        },
        {
            name: 'Assignment-5',
            Marks: 60,

        },
        {
            name: 'Assignment-6',
            Marks: 60,

        },
        {
            name: 'Assignment-7',
            Marks: 60,

        },
        {
            name: 'Assignment-8',
            Marks: 60,

        },
    ];

    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-center mt-5'>Assignment Marks</h2>

            <ResponsiveContainer width="100%" height={800}>
                <BarChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 60]} />

                    <Tooltip />
                    <Legend />

                    <Bar dataKey="Marks" fill="#7E90FE" />
                </BarChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;