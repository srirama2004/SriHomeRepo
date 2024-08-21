/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_4;

import java.util.Scanner;

/**
 *
 * @author srira
 */
public class print_nondia {
    public static void main(String args[])
    {
    Scanner sc=new Scanner(System.in);
    int n,i,j,c=0;
    int a[][]=new int[100][100];
    System.out.print("enter the size:");
    n=sc.nextInt();
     System.out.println("enter the elements");
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
           a[i][j]=sc.nextInt();
        }
        }
    for(i=0;i<n;i++)
    {
    for(j=0;j<n;j++)
    {
        if(i==j)
            continue;
        else
        {
            c=c+a[i][j];
            System.out.print(a[i][j]);
        }
    }
    }
    System.out.print("the sum is :"+c);
    
    
    }
} 
