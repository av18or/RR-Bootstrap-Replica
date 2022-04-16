import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function Background() {
  return (
    <Card
      style={{
        width: "100%",
        minHeight: "450px",
        marginBottom: "50px",
        backgroundColor: "#DEEED6",
      }}
      className="text-black"
    >


<div>

  <div>  
    <img style={{
      height: "450px",
      width: "25%",
      position: "absolute",
      justifyContent: "flex-end",
    }}
    src="background.webp"
    alt="Background image with various fruits and vegetables"/>

  </div>
        <div
          style={{
              
            top: "auto",
            width: "578px",
            marginLeft: "100px",
            marginBottom: "50px",
            marginTop: "75px",
          }}
        >


            
          <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
            Order groceries for delivery <br /> or pickup today
          </Card.Text>
          <Card.Text style={{ fontSize: "1em" }}>
            Whatever you want from local stores, brought right to your door.
          </Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                
                size="lg"
                type="text"
                placeholder= "Enter your address"
              />
            </Form.Group>
          </Form>
          
        </div>
</div>
      
    </Card>
  );
}
