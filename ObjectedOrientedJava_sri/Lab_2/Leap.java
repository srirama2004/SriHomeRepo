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
public class Leap {
    public static void main(String args[]){
    Scanner sc=new Scanner(System.in);
    int n,i,m;
    System.out.println("Enter the year u want:");
             n=sc.nextInt();
    if(n%4!=0)
         System.out.println("its not a leap year");
    else if(n%100!=0)
         System.out.println("its a leap year");
    else if(n%400!=0)
         System.out.println("its not a leap year");
    else
         System.out.println("its a leap year");
    }   
}
