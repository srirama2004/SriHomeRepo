/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_5;

import java.util.Scanner;

/**
 *
 * @author srira
 */
public class com {
     public static void main(String args[]){
        compl c=new compl();
        c.getdata();
        c.add();
    }
}
class compl{
     Scanner sc =new Scanner(System.in);
    int a;
    int b;
    int c;
    void getdata(){
   System.out.println("enter the integer:");
   a=sc.nextInt();
   System.out.println("enter the integer:");
   System.out.println("enter real part");
   b=sc.nextInt();
   System.out.println("enter imaginary part");
   c=sc.nextInt();
    }
   
    
   void add()
    {
        int x=a+b;
        System.out.println(x);
    }
}
