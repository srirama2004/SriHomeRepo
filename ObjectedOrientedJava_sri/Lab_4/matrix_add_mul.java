/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_4;

import java.util.Scanner;

/**
 *
 * @author student
 */
public class matrix_add_mul {
     public static void main(String args[])
     {
    Scanner sc=new Scanner(System.in);
    int n,m,i,j,k,x=0,e,f;
    int a[][]=new int[100][100];
    int b[][]=new int[100][100];
    int c[][]=new int[100][100];
    int d[][]=new int[100][100];
    int y[][]=new int[100][100];
    System.out.println("The column of 1st and row of 2nd matrices should be same :");
    System.out.println("enter the row1:");
    n=sc.nextInt();
    System.out.println("enter the column1:");
    m=sc.nextInt();
    System.out.println("enter the row2:");
    e=sc.nextInt();
    System.out.println("enter the column2:");
    f=sc.nextInt();
        
    System.out.println("enter the elements 1st array:");
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
           a[i][j]=sc.nextInt();
        }
        }
    System.out.println("enter the elements of 2nd array:");
       for(i=0;i<e;i++)
    {
        for(j=0;j<f;j++)
        {
           b[i][j]=sc.nextInt();
        }
        }
         System.out.println("enter the elements 3rd array:");
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
           c[i][j]=sc.nextInt();
        }
        }
       for(i=0;i<m;i++)
    {
        for(j=0;j<m;j++)
        {
            for(k=0;k<m;k++)
            x=x+a[i][k]*b[k][j];
           d[i][j]=x;
            x=0;
        }        
}
          for(i=0;i<n;i++)
    {
        for(j=0;j<f;j++)
        {
            System.out.print(" "+d[i][j]);
        }
         System.out.println();
    }
      for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
           y[i][j]=a[i][j]+c[i][j];
        }
    }
      System.out.println("addition of 1st matrix and 3rd matrix");
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            System.out.print(" "+y[i][j]);
        }
         System.out.println();
}
}
}

