import { useState } from 'react'
import './App.css'

const items = [
  {
    id: '1',
    title: 'Camera'
  },
  {
    id: '2',
    title: 'Towel'
  },
  {
    id: '3',
    title: 'Swim pants'
  },
  {
    id: '4',
    title: 'Beach Volleayball'
  },
  {
    id: '5',
    title: 'Scuba gear'
  },
];

const initialCheckState = items.reduce((result, item) => ({...result, [item.id]: false}), {});

function App() {

  const [checked, setChecked] = useState(initialCheckState);

  let count = 0;
  for (const item of items){
    if(checked[item.id]){
      count++;
    }
  }

  const progress = Math.round((count/items.length) * 100);

  return (
    <>
     <header className="progress">
        <label className="progress-headline">
          <span>Pack list:</span>
          <span>{progress}%</span>
        </label>
        <progress className='progress-bar' max={items.length} value={count}>{progress} %</progress>
      </header>
      <ul className='checklist'>
        { 
          items.map((item, index) => 
          <li key={index} className='checklist-item'>
            <CheckBox 
              title={item.title} 
              id={item.id} 
              checked={checked[item.id]}
              onToggle={value => setChecked({...checked, [item.id]: value})}
              />
          </li>) 
        }
      </ul>
    </>
  )
}

function CheckBox(props){

  const handleChange = event => {
    // foward the state change of the checkbox to the parent
    props.onToggle(event.target.checked);
  } 

  return (
    <label className='checkbox-label'>
      <input type="checkbox" name={props.id} checked={props.checked} onChange={handleChange}/>
      <span className="checkbox-checkmark"></span>
      {props.title}
    </label>
  )

} 

export default App
