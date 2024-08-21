/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_3;

/**
 *
 * @author srira
 */
public class comb_per {
    public static void main(String args[])
    {
        int a[]= {1, 2, 3, 4};
        int i,j,t,k;
        for(i=0;i<=3;i++)
        {
            for(j=0;j<3;j++)
            {
                t=a[j];
                a[j]=a[j+1];
                a[j+1]=t;
                 for(k=0;k<=3;k++)
                System.out.print(a[k]);
                 System.out.print("  ");
            }
           System.out.println();
        }
    }
}
