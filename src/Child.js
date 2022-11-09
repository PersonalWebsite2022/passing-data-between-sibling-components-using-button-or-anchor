import { Link } from 'react-router-dom'
import './Child.css';

export const Child = (prop) => {
    return (
      <>
        <h1>Child Component</h1>
        <br />
        <a onClick={()=>{prop.handleClick(true)}} href="/AnotherChild">Passing Data from Child to Another Child (Anchor)</a>
        <p>If you click the anchor, App component will be rendered two times. So the value of isLinkClickedInChild will be changed from 'false' to 'ture' and then 'false' again. </p>
        <br /><br />
        <button onClick={()=>{prop.handleClick(true)}}>Passing Data from Child to Another Child (Button - only render one time)</button>
        <br /><br />
        <Link to="/AnotherChild">
          <button className="buttonLikeLink" onClick={()=>{prop.handleClick(true)}}>Click to Another Child Component with Data (Button in Link - only render one time)</button>
        </Link>
      </>
    )
  }
  