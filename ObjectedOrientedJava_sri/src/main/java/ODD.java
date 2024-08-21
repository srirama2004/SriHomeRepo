/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author student
 */import java.util.Scanner;
public class ODD {
     public static void main(String args[]){
             int i,n;
             Scanner sc=new Scanner(System.in)
             System.out.println("Enter the number till u want:");
             
                     n=sc.nextInt();
                     for(i=1;i<n;i++)
                     {
                         if((i%2)!=0)
                              System.out.println("the numbers are:"+i);
                     }
     }
}
