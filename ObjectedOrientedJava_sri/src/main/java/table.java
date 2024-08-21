/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author student
 */import java.util.Scanner;
public class table {
    public static void main(String args[]){
    Scanner sc=new Scanner(System.in);
    int n,i,m;
    System.out.println("Enter the number u want:");
             n=sc.nextInt();
                System.out.println("the table is:");
             for(i=1;i<=10;i++)
             {
             m=n*i;
             System.out.println(n+"*"+i+"="+m);
             }
    }
}
