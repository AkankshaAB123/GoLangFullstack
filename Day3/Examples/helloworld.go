package main
import "fmt"
type student struct{
	Name string
	Rgno float64
	Dept string

}

func main() {
  //message :="Hello world!"
  //fmt.Println(message)
  st:=student{Name:"Student1",Rgno:78.9,Dept:"CS"}
  fmt.Println("Name:",st.Name,"\nRegistration No:",st.Rgno,"\nDepartment:",st.Dept)
}
// func  ifelseDemo(){
	//var num1,num2 int
	//fmt.Scanln(&num1)
	//fmt.Scanln(&num2)

	    //if num1 > num2 {
			//fmt.Println("num1 is greater than the num2.")
		//} else if num1 < num2 {
			//fmt.Println("num1  is less than the num2.")
		//} else {
			//fmt.Println("Both numbers are equal.")
		//}
	//}
	//func forCondiDemo(){
		//n :=1
		//for n<5{
			//n*=2
		//}
		//fmt.Println(n)
	//}
 //func forPythonStyle(){
	///strings:=[]string{"hello","world","Golang","NIE"}
	//for _,s:=range strings{
		//fmt.Println(s)
	//}
 //}


