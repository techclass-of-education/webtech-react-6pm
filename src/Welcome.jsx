import { useLocation } from "react-router-dom";

export function Welcome() {
    const data=useLocation()
    console.log(data.state.username)
  return (
    <div>
      <h1>Welcome user <span style={{color:"red"}}>{data.state.username}</span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem pariatur
        beatae doloremque quas natus, eius accusantium voluptas obcaecati
        temporibus ducimus hic non fuga delectus explicabo reprehenderit quod,
        harum incidunt velit.
      </p>
    </div>
    
  );
}
