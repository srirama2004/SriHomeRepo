/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_5;

/**
 *
 * @author srira
 */
import java.util.Scanner;
import java.util.*;
public class employee_1 {
    public static void main(String args[]){
        employee e =new employee();
        e.getdata();
          float x=e.cal();
        e.dis(x);
    }
}
class employee{
 String name;
 String  city;
 float dear_a;
 float h_r;
 float b;
  Scanner sc=new Scanner(System.in);
 void getdata()
 {
     System.out.println("enter the detatils:");
      name= sc.nextLine();
      city= sc.nextLine();
       b=sc.nextFloat();
      dear_a=sc.nextFloat();
       h_r  =sc.nextFloat();
 }
   float cal()
 {
     float total=(float) ((float)b+(b*(dear_a/100.0))+(b*(h_r/100.0)));
      System.out.println("total salary is = "+total);
            System.out.println(" name is="+name);
      System.out.println("basic salary != "+b);
     return total;
 }
 void dis(  float total)
 {
     System.out.println("total salary is = "+total);
 }
}