import { FormEvent, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function BookingPage() {
  
  const [value, onChange] = useState<Value>(new Date());
  const [time, setTime] = useState(0);

  function setName(value: string): void {
    throw new Error('Function not implemented.');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    console.log(time);
    
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
     <DateTimePicker onChange={(e) => setTime(Number(e?.getTime()))} value={value} />
      <label>:

        <input 
          type="text" 
          
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    <h1>Welcome To The Booking Page</h1>
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
    </>
  );
  
}
export default BookingPage;