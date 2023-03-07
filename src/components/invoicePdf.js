import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Font
  } from "@react-pdf/renderer";
import { Image } from '@react-pdf/renderer';
import ghl from '../assets/img/ghl.jpg';

// Create styles
const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Times-BoldItalic'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 15,
      textAlign: 'center',
      margin: 12,
      fontFamily: 'Times-Bold'
    },
    subcost: {
        fontSize: 15,
        textAlign: 'right',
        margin: 15,
        fontFamily: 'Times-Bold'
    },
    text: {
      margin: 6,
      fontSize: 12,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: -30,
      marginBottom: 10,
      marginHorizontal: 168,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
    viewer: {
    width: window.innerWidth*0.8, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  });
  

export default (data) => {
    return (
        <PDFViewer style={styles.viewer}>
      <Document>
        <Page style={styles.body}>
        <Text style={styles.header} fixed>
           ~ Patient Invoice ~
        </Text>
        <Text style={styles.title}>Global Hospitals</Text>
        <Text style={styles.author}>C-32 Lane, Amherst Street, Kolkata-700009, West Bengal, India</Text>
        <Image
        style={styles.image}
        src={ghl}
      />
      <Text style={styles.subtitle}>Patient Details</Text>
      <Text style={styles.text}>Patient ID : 50</Text>
      <Text style={styles.text}>Patient Name : John Smith</Text>
      <Text style={styles.text}>Age : 50</Text>
      <Text style={styles.text}>Gender : Male</Text>
      <Text style={styles.text}>Doctor Name : Dr. John Pareto</Text>

      <Text style={styles.subtitle}>Treatment Details</Text>
      <Text style={styles.text}>Illness Details : dshcbdhcbhhcbhdcbdsjbcbsccbdsncdsb</Text>
      <Text style={styles.text}>Admit Date : 14/15/23</Text>
      <Text style={styles.text}>Discharge Date : 14/15/23</Text>
      <Text style={styles.text}>Stay Cost : Rs. 15000</Text>

      <Text style={styles.subtitle}>Procedure Details</Text>
      <Text style={styles.text}>Procedure Name : Bypass Surgery</Text>
      <Text style={styles.text}>Procedure Cost : 14/15/23</Text>
      <Text style={styles.text}>Procedure Date : 14/15/23</Text>

      <Text style={styles.subtitle}>Test Details</Text>
      <Text style={styles.text}>Test Name : Bypass Surgery</Text>
      <Text style={styles.text}>test Date : 14/15/23</Text>
      <Text style={styles.text}>Cost : 14/15/23</Text>

      <Text style={styles.subtitle}>Medication Details</Text>
      <Text style={styles.text}>Medicine Name : Paracetamol</Text>
      <Text style={styles.text}>Medicine Dose : 6mg</Text>
      <Text style={styles.text}>Cost : 100</Text>

      <Text style={styles.subcost}>Total Cost : Rs. 50000</Text>
      <Text style={styles.subtitle}>Thank You ! Visit Again</Text>
      <Text style={styles.subtitle}>Emergency: 1800-8908-789</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
        </Page>
      </Document>
    </PDFViewer>
    );
  }
  
