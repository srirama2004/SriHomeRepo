/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author student
 */
import java.util.Scanner ;
public class RectangleArea {
    public static void main(String args[])
{
int l,b,area,cir;
Scanner sc=new Scanner(System.in);
l=sc.nextInt();
b=sc.nextInt();
area=l*b;
cir= 2*(l+b);
System.out.println("lenght of rectangle is:"+l);
System.out.println("breadth of rectangle is:"+b);
System.out.println("area of rectangle is:"+area);
System.out.println("circumference of rectangle is:"+cir);
}    
}
