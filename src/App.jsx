import {useState} from "react";

function App() {
    const date = new Date();
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'}
    console.log(date.toLocaleDateString('en-GB', options).split('/').reverse().join('-'));
    const [selectedDate, setSelectedDate] = useState(date.toLocaleDateString('en-GB', options).split('/').reverse().join('-'));
    const [person, setPerson] = useState("");
    const [days, setDays] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (selectedDate) setDays((prev) => [...prev, {id: days.length.toString(), date: selectedDate, name: person}]);
    }

    return (<div className="bg-gradient-to-bl from-gray-500 to-gray-300 h-screen text-gray-900">
            <div className="container mx-auto p-10">
                <h1 className="text-3xl font-bold text-center">Work From Home Calendar</h1>
                <div className="grid md:grid-rows-2 lg:grid-cols-2 mt-10">
                    <form className="p-8 flex flex-col gap-5" onSubmit={handleSubmit}>
                        <label htmlFor="wfhdate">WFH Date</label>
                        <input id="wfhdate" type="date" value={selectedDate}
                               onChange={e => setSelectedDate(e.target.value)}
                               className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                        <label htmlFor="dev">Developer</label>
                        <select onChange={e => setPerson(e.target.value)} id="dev"
                                className="p-2 text-gray-900 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer">
                            <option disabled selected>Select an option</option>
                            <option>Bijay</option>
                            <option>Sabya</option>
                            <option>Shanks</option>
                            <option>Bikram</option>
                            <option>Sworup</option>
                            <option>Rakesh</option>
                        </select>

                        <button className="p-2 rounded bg-black/20 text-white" type="submit">Submit</button>
                    </form>
                    <div className="p-8 flex flex-col gap-5">
                        <h1
                            className="rounded p-6 bg-gray-800 text-white flex justify-center font-bold text-2xl">{date.toLocaleDateString('en-US', {month: 'long'})}</h1>
                        {days?.map(day => <div
                            key={day.id}
                            className="rounded p-4 bg-gray-50 flex justify-center">{day.name}, {(new Date(day.date)).toLocaleDateString('en-US', {day: '2-digit'})}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default App
