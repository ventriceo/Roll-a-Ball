#pragma strict

var playerSpeed: float; //number variable

function Start () {
}

function Update () 
{
	if (Input.GetKey (KeyCode.UpArrow))
	{
		print('up pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,1) * playerSpeed);
	}
	if (Input.GetKey (KeyCode.DownArrow))
	{
		print('down pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,-1) * playerSpeed);
	}
	if (Input.GetKey (KeyCode.RightArrow))
	{
		print('right pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(1,0,0) * playerSpeed);
	}
	if (Input.GetKey (KeyCode.LeftArrow))
	{
		print('left pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(-1,0,0) * playerSpeed);
	}
}


function OnTriggerEnter (theTrigger: Collider)
{
	if(theTrigger.gameObject.tag =="prize")
	{
		Destroy(theTrigger.gameObject); 
	}
	
}