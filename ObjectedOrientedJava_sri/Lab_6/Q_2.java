/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_6;

import java.util.Scanner;
import java.nio.ByteBuffer;

/**
 *
 * @author srira
 */
public class Q_2 {
     public static void main(String args[]){
         ug u[]=new ug[100];
         int i;
          Scanner sc=new Scanner(System.in);
      System.out.println("enter number of student");
      int n=sc.nextInt(); 
       for(i=0;i<n;i++)
       {
           u[i]=new ug();
           u[i].getdata();
       }
         for(i=0;i<n;i++){
             u[i].check();
         }
              for(i=0;i<n;i++){
            u[i].checks();}
}
}
class student{
    String name;
    int reg,age,fee,i=0;
     Scanner sc=new Scanner(System.in);
   void getdata()
    {
           System.out.println("enter details of student:"+i);
        name=sc.nextLine();
        reg=sc.nextInt();
        age=sc.nextInt();
       fee=sc.nextInt();
          i++;
    }
       }
class pg extends student{
    int sem=8;
    void check()
    {
        if(fee==150000)
        {
             System.out.println("the student registered to PG course are");
             System.out.println("name:"+name);
             System.out.println("registration number:"+reg);
             System.out.println("Age:"+age);  
             
        }
    }
}
class ug extends pg{
     void checks()
    {
        if(fee==250000)
        {
             System.out.println("the student registered to UG course are");
             System.out.println("name:"+name);
             System.out.println("registration number:"+reg);
             System.out.println("Age:"+age);    
        }
    }
}