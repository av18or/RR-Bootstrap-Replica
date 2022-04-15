import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';

export default function Background() {
  return (
    
    <Card style={{ width: "100%", minHeight: "450px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
      <div>
          
        <img
          style={{
            height: "450px",
            width: "20%",
            position: "fixed",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          src="background.webp"
          alt="Background image with various fruits and vegetables"
        />
        
      </div>
    </Card>
  );
}
