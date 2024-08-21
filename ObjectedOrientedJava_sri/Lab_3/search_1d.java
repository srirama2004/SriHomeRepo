/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_3;

import java.util.Scanner;

/**
 *
 * @author srira
 */
public class search_1d {
     public static void main(String args[])
    {
    Scanner sc=new Scanner(System.in);
    int n,index=0,x=0;
     int a[]={1,2,3,1,2,1,5,6,7} ;
    System.out.print("enter the search element:");
    n=sc.nextInt();
    for(int i:a)
    {
        if(i==n)
        {
              System.out.println("the value is found at:a["+index+      "]");
        }
        else
            x++;
        index++;
    }
    if(x==9)
        System.out.println("not found!");
    
    }
}