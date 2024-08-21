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
public class Check {
    public static void main(String args[]){
    Scanner sc=new Scanner(System.in);
    int n,i;
    int a[]=new int[10];
       System.out.println("Enter the numbers u want:");
    for(i=0;i<10;i++)
    { 
    a[i]=sc.nextInt();
    
    }
    for(i=0;i<10;i++)
    {
       if(a[i]<0){
           System.out.println("the negative numbers are:");
           System.out.println(" "+a[i]);
       }
       else
       {
              System.out.println("the positive numbers are:");
           System.out.println(" "+a[i]);  
               }                                          
    }                                                       
}
}
