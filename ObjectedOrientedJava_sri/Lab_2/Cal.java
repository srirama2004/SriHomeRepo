/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_2;

/**
 *
 * @author srira
 */
import java.util.Scanner;
public class Cal {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        char c,f;
        float a,x;
        int e=1;
        while(e==1)
        {
             System.out.println("enter y to continue and n to exit");
           c=sc.next().charAt(0);
        if(c=='y')
        {
             System.out.println("enter + to add - to subtract,* to multiply and / to divide");
             f=sc.next().charAt(0);
              System.out.println("enter the numbers");
              a=sc.nextFloat();
              x=sc.nextFloat();
        switch(f)
        {
            case '+': float add=a+x;
                    System.out.println("add="+add);
                     break;
            case '-':  float sub=a-x;
                    System.out.println("sub="+sub);
                     break;
            case '*':  float m=a*x;
                    System.out.println("multiply="+m);
                     break;
            case '/':  float d=a/x;
                    System.out.println("division="+d);
                     break;
            default : System.out.println("operation not present!");
        }
        }
        else if(c=='n')
        {
        e=0;
        break;
        }
            }
    }
}
