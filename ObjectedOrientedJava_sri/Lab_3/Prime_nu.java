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
public class Prime_nu {
    public static void main(String args[])
    {
    Scanner sc=new Scanner(System.in);
    int n,m,i,c=0,k;
    System.out.print("enter the limits:");
    n=sc.nextInt();
    m=sc.nextInt();
    for(k=n;k<=m;k++)
    {
        for(i=2;i<k;i++)
        {
          if(k%i==0)
          {
           c=0;
           break;
        }
          else
              c=1;
          
    }
        if(c==1)
        System.out.print("prime number:"+k); 
    } 
    }
}
