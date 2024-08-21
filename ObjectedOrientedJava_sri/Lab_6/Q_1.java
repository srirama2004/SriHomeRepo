/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_6;

import java.util.Scanner;

/**
 *
 * @author srira
 */
public class Q_1 {
     public static void main(String args[]){
           Scanner sc=new Scanner(System.in);
         current c=new current();
         savings s=new savings();
           System.out.println("enter  type of account:");
          int type=sc.nextInt();
         c.getdata();
         if(type==1)
         {
         c. get_depo();
         c.withdraw();
         c.check();
         }
         else if(type==2)
         {
             s.get_sav();
             s.with_draw();
         }
     }
}
class account{
    String name;
    int a_n;
    String ty_ac;
     Scanner sc=new Scanner(System.in);
    void getdata(){
        System.out.println("enter nam,account number and type of account:");
        name=sc.nextLine();
        a_n=sc.nextInt();
        ty_ac=sc.nextLine();
    }
}
class current extends account{
    float b,d ,w;
      char c;
    void  get_depo(){
    System.out.println("enter deposit:");
   d =sc.nextFloat();
   b=b+d;
    System.out.println("current balance is :"+b);
}
    void withdraw(){
            System.out.println("Do u want to withdraw if press Y:");
                   c=sc.next().charAt(0);
                   if(c=='Y')
                   {
                        System.out.println("enter withdrawal amount:");
                         w =sc.nextFloat();
                         b=b-w;
                         System.out.println("current balance is :"+b);
                   }
                   else{
                       return ;
                   }
    }
    void check(){
        float s=3;
        if(b<100){
              System.out.println("Balance is less than recommened ,service tax of "+s+"percent will be fined");
              b=(float) (b-(0.03*b));
                      System.out.println("current balance is :"+b);
        }
    }
}
class savings extends account {
    double ba;
    float in=(float)0.05;
    void get_sav(){
    System.out.println("enter deposit:");
       ba=sc.nextDouble();
       ba=(double)ba+(0.05*ba);
        System.out.println("current balance is :"+ba); 
}
      void with_draw(){
            System.out.println("Do u want to withdraw if press Y:");
                char   e=sc.next().charAt(0);
                   if(e=='Y')
                   {
                        System.out.println("enter withdrawal amount:");
                      float  f =sc.nextFloat();
                         ba=ba-f;
                         System.out.println("current balance is :"+ba);
                   }
                   else{
                       return ;
                   }
    }
}