import React from "react";
import {
  Page,
  Document,
  Image,
  StyleSheet,
  Text,
  View,
  Link,
  BlobProvider,
  Font,
} from "@react-pdf/renderer";
import ReportTitle from "./ReportTitle";
import BillTo from "./Footer";
import YearEnded from "./YearEnded";
import ReportItemsTable from "./ReportItemsTable";
import ReportThankYouMsg from "./ReportThankYouMsg";
import logo from "../../assets/logo.png";
import Footer from "./Footer";
// import report from 'src/data/report';
import report from "src/sections/pdf/pdf-table";
import AdditionalOfficers from "./additionalOfficers";
import { style } from "@mui/system";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    // paddingTop: 30,
    // paddingLeft:60,
    // paddingRight:60,
    lineHeight: 1.5,
    flexDirection: "column",
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    // fontFamily: "Helvetica",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
    // fontFamily: "Helvetica",
    fontFamily: "Oswald",
  },
  link: {
    justifyContent: "flex-end",
    color: "black",
    textDecoration: "white",
  },
  para: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 12,
    // margin: 12,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  toc_container: {
    flexDirection: "row",
    marginBottom: 1,
    marginLeft: 10,
    // marginRight: 18,
    marginTop: 15,
    fontFamily: "Times-Roman",
    justifyContent: "space-between",
  },
  toc: {
    // marginBottom: 1,
    // marginTop: 15,
    // marginLeft: 10,
    fontSize: 12,
    // margin: 12,
    // textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  toc2: {
    marginBottom: 3,
    marginTop: 3,
    marginLeft: 40,
    fontSize: 12,
    // margin: 12,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  list1: {
    flexDirection: "row",
    marginBottom: 4,
    marginLeft: 13,
    marginRight: 18,
  },
  list2: {
    flexDirection: "row",
    marginBottom: 4,
    marginLeft: 15,
  },
  list3: {
    flexDirection: "row",
    marginBottom: 4,
    marginLeft: 30,
  },
  dot: {
    marginHorizontal: 8,
  },
  table_container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  table_header: {
    width: "50%",
    backgroundColor: "#2222",
    fontFamily: "Times-Roman",
  },
  table_row: {
    width: "50%",
    textAlign: "center",
  },
});

console.log("FromReportJS", report);
let pg_calculationOfReliefClaim = 0;
let pg_researchAndDevelopmentActivity = 0;

let chap1,
  chap2,
  chap3,
  chap4,
  chap5,
  chap6,
  chap7,
  chap8,
  chap9,
  chap10,
  chap11,
  chap12,
  chap13 = 0;

let array = [];

const Report = ({ report }) => (
  <Document>
    <Page
      size="A4"
      style={styles.page}
      bookmark="Research & Development Tax Relief Claim Report"
    >
      <Image style={styles.logo} src={logo} />
      <ReportTitle
        title={report.company.name}
        subheading="Research & Development Tax Relief Claim"
      />
      <YearEnded report={report} />
      <Footer report={report} />
      <Text
        style={styles.pageNumber}
        render={({ pageNumber }) => `${pageNumber}`}
        fixed
      />
      <Text style={styles.title} id="chap1" break>
        Contents
      </Text>
      <Text
        // style={styles.pageNumber}
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap1 = pageNumber)}
      />
      <Link style={styles.link} src="#chap1">
        <View style={styles.toc_container}>
          <Text style={styles.toc}>
            Contents
            ........................................................................................................................................................
          </Text>
          <Text render={() => chap1} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap2">
        <View style={styles.toc_container}>
          <Text style={styles.toc}>
            Introduction and Background
            .......................................................................................................................
          </Text>
          <Text render={() => chap2} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap3">
        <View style={styles.toc_container}>
          <Text style={styles.toc2}>
            Introduction
            .....................................................................................................................................
          </Text>
          <Text render={() => chap3} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap4">
        <View style={styles.toc_container}>
          <Text style={styles.toc2}>
            Company Background
            .....................................................................................................................
          </Text>
          <Text render={() => chap4} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap5">
        <View style={styles.toc_container}>
          <Text style={styles.toc2}>
            Confidentiality and use of this report
            ..............................................................................................
          </Text>
          <Text render={() => chap5} />
        </View>{" "}
      </Link>
      <Link style={styles.link} src="#chap6">
        <View style={styles.toc_container}>
          <Text style={styles.toc}>
            Published Guidance Relevant to the Company's Claim
            ................................................................................
          </Text>
          <Text render={() => chap6} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap7">
        <View style={styles.toc_container}>
          <Text style={styles.toc}>
            Competent Professionals Associated with the Projects
            ................................................................................
          </Text>
          <Text render={() => chap7} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap8">
        <View style={styles.toc_container}>
          <Text style={styles.toc}>
            Development Activities
            ................................................................................................................................
          </Text>
          <Text render={() => chap8} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap9">
        <View style={styles.toc_container}>
          <Text style={styles.toc2}>
            Project Description
            .........................................................................................................................
          </Text>
          <Text render={() => chap9} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap10">
        <View style={styles.toc_container}>
          <Text style={styles.toc2}>
            History and Technological advance sought
            .....................................................................................
          </Text>
          <Text render={() => chap10} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap11">
        <View style={styles.toc_container}>
          <Text style={styles.toc2}>
            Technological uncertainties
            .............................................................................................................
          </Text>
          <Text render={() => chap11} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap12">
        <View style={styles.toc_container}>
          <Text style={styles.toc2}>
            Research and Development Activity
            ...............................................................................................
          </Text>
          <Text render={() => chap12} />
        </View>
      </Link>
      <Link style={styles.link} src="#chap13">
        <View style={styles.toc_container}>
          <Text style={styles.toc}>
            Calculation of Relief Claim
            ..........................................................................................................................
          </Text>
          <Text render={() => chap13} />
        </View>
      </Link>
      <Text
        style={styles.title}
        bookmark={{
          title: "Chapter 1: Introduction and Background",
          fit: true,
        }}
        id="chap2"
        break
      >
        Introduction and Background
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap2 = pageNumber)}
      />
      <Text style={styles.subtitle} id="chap3">
        Introduction
      </Text>{" "}
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap3 = pageNumber)}
      />
      <Text style={styles.para}>
        {report.editor} has been instructed by {report.company.name} (“the
        Company”) to undertake an analysis of their research and development
        (R&D) activities undertaken for the year ended {report.yearEnded}.
      </Text>
      <Text style={styles.para}>
        The purpose of the exercise is to identify those items of ‘allowable
        expenditure’ that to date have been unclaimed but which fall within the
        definition of R&D as defined within Part 13 of the Corporation Tax Act
        2009.
      </Text>
      <Text style={styles.para}>
        In accordance with the Department for Business, Innovation & Skills
        guideline this report will only contain those qualifying costs incurred
        at commencement of the projects where identifiable scientific or
        technological uncertainties have been resolved.
      </Text>
      <Text style={styles.para}>
        The projects have been finalised for R&D purposes and the calculation of
        apportioned costs once the relevant scientific or technological
        uncertainties have been resolved as per para. 34 of the guidelines. We
        have discounted any costs pertaining to marketing, funding and
        distribution as per para. 28 of the guidelines.
      </Text>
      <Text style={styles.para}>
        We understand that any risks taken during the qualifying activity must
        have been on behalf of the company and that any routine development
        costs before, during or after the uncertainties have been resolved do
        not qualify.
      </Text>
      {report.company.officers ? (
        <>
          <Text style={styles.para}>
            The current officers of the Company are as follows:
          </Text>
          <View style={{ paddingVertical: 15 }}>
            <View style={styles.table_container}>
              <Text style={styles.table_header}>Name</Text>
              <Text style={styles.table_header}>Position</Text>
              <Text style={styles.table_header}>Date Appointed</Text>
            </View>
            <AdditionalOfficers officers={report.company.officers} />
          </View>
        </>
      ) : null}
      <Text style={styles.para}>
        The directors and their team have worked together with their chosen
        technical advisers to design, prototype, test and finalize technically
        unique working solutions to their commercial problems.{" "}
      </Text>
      <Text style={styles.para}>
        In support of the Company’s claim {report.editor}, have attempted to
        provide a plain English description of the innovation and creativity
        undertaken.
      </Text>
      <Text style={styles.para}>
        {report.company.name} has carried out the first phase of development of
        a software platform for websites with improved security and reliability
        with a view to market as a major offering.
      </Text>
      <Text style={styles.subtitle} id="chap4">
        Company background
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap4 = pageNumber)}
      />
      <Text style={styles.para}>
        {report.company.name} was incorporated in {report.company.founded}
      </Text>
      <Text style={styles.para}>
        The company is a ‘going concern’ as per ss.1046 and 1057 CTA 2009.
      </Text>
      <Text style={styles.para}>
        The company was a ‘{report.company.size}’, as defined in s.1119-1120 CTA
        2009, during the relevant accounting period and received no state aid
        and/or subsidy with regards to R&D in the period. Therefore, the claim
        is made under the SME scheme.
      </Text>
      <Text style={styles.para}>
        The company’s R&D projects and qualifying expenditure was related to
        their trade activity during relevant accounting periods in accordance
        with ss.87 and 1044 CTA 2009.
      </Text>
      <Text style={styles.para}>
        The statutory cap on R&D relief has not been breached in the accounting
        period referred to in this report as per s.1113-1118 CTA 2009.
      </Text>
      <Text style={styles.para}>
        The company have borne risk in undertaking the R&D activities detailed
        within the report which have involved a great deal of conceptualisation,
        design and experimentation. They have realised that by undertaking these
        risks, they can offer a unique market leading solution which sets them
        apart from their competition, and they absorbed the financial burden
        associated with such.
      </Text>
      <Text style={styles.subtitle} id="chap5">
        Confidentiality and use of this report
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap5 = pageNumber)}
      />
      <Text style={styles.para}>
        The information contained in the report is confidential and the Company
        is keen to ensure its integrity. The Company would be grateful if HMRC
        could ensure that details enclosed in this report are not made available
        beyond the scope of facilitating the R&D tax relief claim.
      </Text>
      <Text
        // style={style.title}
        style={{
          fontSize: 22,
          textAlign: "center",
          // fontFamily: "Helvetica",
          fontFamily: "Oswald",
          marginBottom: 12,
          marginTop: 18,
        }}
        bookmark={{
          title:
            "Chapter 2: Published Guidance Relevant to the Company's Claim",
          fit: true,
        }}
        id="chap6"
        break
      >
        Published Guidance Relevant to the Company’s Claim
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap6 = pageNumber)}
      />
      <Text style={styles.para}></Text>
      <Text style={styles.para}>
        The meaning of R&D for the purposes of making a claim for tax relief
        under CTA09 pt13 is determined by CTA 2010 s1138. CTA09 pt. 13 defines
        R&D as being activities that fall to be R&D in accordance with normal
        accounting practice, which broadly identifies 3 types of R&D activity:-
      </Text>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text style={{ fontFamily: "Times-Roman" }}>
          {" "}
          Pure research - experimental or theoretical work undertaken primarily
          to acquire new scientific or technical knowledge for their own sake,
          rather than directed towards any specific aim of application.{" "}
        </Text>{" "}
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text style={{ fontFamily: "Times-Roman" }}>
          {" "}
          Applied research - original or critical investigations undertaken in
          order to gain a new scientific or technical knowledge and directed
          towards a specific practical aim or objective.{" "}
        </Text>{" "}
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text style={{ fontFamily: "Times-Roman" }}>
          {" "}
          Development - use of scientific or technical knowledge in order to
          produce new or substantially improved materials, devices, products or
          services, to install new processes or systems prior to the
          commencement of commercial production or commercial applications, or
          to improving substantially to those already produced or installed.{" "}
        </Text>{" "}
      </View>
      <Text
        // style={style.title}
        style={{
          fontSize: 22,
          textAlign: "center",
          // fontFamily: "Helvetica",
          fontFamily: "Oswald",
          marginBottom: 12,
          marginTop: 22,
        }}
        bookmark={{
          title:
            "Chapter 3: Competent Professionals Associated with the Projects",
          fit: true,
        }}
        id="chap7"
        // break //for next page
      >
        Competent Professionals Associated with the Projects
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap7 = pageNumber)}
      />
      <Text style={styles.para}>
        {report.company.owner} has a wealth of knowledge and unparalleled
        experience within the field of software analysis and development and is
        therefore uniquely placed to offer this into the research and
        development of this industry leading innovative way of delivering
        software solutions to businesses.
      </Text>
      <Text
        style={styles.title}
        bookmark={{ title: "Chapter 4: Development Activities", fit: true }}
        break
        id="chap8"
      >
        Development Activities
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap8 = pageNumber)}
      />
      <Text style={styles.subtitle} id="chap9">
        Design and development of a new and improved process/workflow
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap9 = pageNumber)}
      />
      <Text style={styles.subtitle} id="chap10">
        History and Technological advance sought
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap10 = pageNumber)}
      />
      <Text style={styles.para}>{report.companyDetails.company_history}</Text>
      <Text style={styles.subtitle} id="chap11">
        Technological uncertainties
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap11 = pageNumber)}
      />
      <Text style={styles.para}>
        {report.companyDetails.company_uncertainties}
      </Text>
      <Text style={styles.subtitle} id="chap12">
        Research and Development Activity Main activities
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap12 = pageNumber)}
      />
      <Text style={styles.para}>
        {report.companyDetails.company_activities}
      </Text>
      {/* <Text style={styles.title} break>
        Development Activities
      </Text>
      <Text style={styles.subtitle}>
        Design and development of a new and improved process/workflow
      </Text>
      <Text style={styles.subtitle}>
        History and Technological advance sought
      </Text>
      <Text>
        Our own system was designed as the major offerings such as Wordpress,
        Joomla, Concrete5, etc are all complex systems designed to accommodate
        the needs of every conceivable customer. We believe that this leads to
        complex, bloated code that contains many security exposures and
        performance issues as demonstrated to us by various customers asking us
        to fix their hacked, broken or underperforming Wordpress sites. Many
        website owners also fail to have their server side software maintained
        correctly after development of their sites, so we have adopted a
        Software as a Service (SaaS) approach to the provision of websites where
        we charge a build price and ongoing monthly maintenance cost for which
        we ensure the maintenance of the site and the software that delivers the
        site.
      </Text>
      <Text>Our system is designed to achieve the following aims:</Text>

      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>Ability to run on multiple platforms</Text>{" "}
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Designed for low CPU requirements on server which improves resilience
          to DDOS attacks
        </Text>{" "}
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Low CPU on server also delivers pages faster to the client machine
        </Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>Rapid build cycle enables fast creation of websites</Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Encryption of content at application layer for increased security of
          customer data
        </Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Works in conjunction with website administration pages to deliver
          enquiries and purchases securely to the website owner
        </Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>CMS system provides easy update of pages</Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Being a bespoke system with fewer deployments makes it a less
          lucrative target for hackers than major products such as Wordpress or
          Joomla
        </Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Being our own system allows us a faster deployment of new technologies
        </Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Security of system is easier to maintain as we have no reliance on
          third-party plugins and related security risks.
        </Text>
      </View>
      <View style={styles.list1}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>Our smaller code base improves reliability and security</Text>
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>a)</Text>{" "}
        <Text>
          This has required the research, investigation and development of the
          entire system using in-house knowledge and technical expertise.
        </Text>{" "}
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>b)</Text>{" "}
        <Text>
          Our client has sought an advance in technology in the field of
          software improvement and development of the existing technology for
          the automation and design of a better and more efficient system{" "}
        </Text>{" "}
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>c)</Text>{" "}
        <Text>
          Prior to undertaking this project, the claimant undertook a
          benchmarking exercise, to evaluate the current available technology
          solutions in the marketplace. When considering readily available
          technologies that existed on the market, as part of the wider
          benchmarking activities conducted, the evidence suggested that
          although these had the potential to provide them with very limited
          capabilities, it would necessitate further development work to the
          underlying architecture to successfully achieve the exact desired
          prototype sought.
        </Text>{" "}
      </View>
 

      <Text style={styles.subtitle}>Technological uncertainties</Text>
      <View style={styles.list2}>
        <Text style={styles.dot}>a)</Text> <Text>The key challenges are:</Text>{" "}
      </View>
      <View style={styles.list3}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>Finding clean code to avoid security errors</Text>{" "}
      </View>
      <View style={styles.list3}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>Our smaller code base improves reliability and security </Text>{" "}
      </View>
      <View style={styles.list3}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>Providing fast and reliable platform to operate new systems</Text>{" "}
      </View>
      <View style={styles.list3}>
        <Text style={styles.dot}>•</Text>{" "}
        <Text>
          Designed for low CPU requirements on server which improves resilience
          to DDOS attacks{" "}
        </Text>{" "}
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>b)</Text>{" "}
        <Text>
          These uncertainties existed because it was not known if the solution
          was technologically feasible or achievable in practice in the proposed
          environment and specific conditions. The company identified the
          existence of these uncertainties via a combination of their research
          and the use of their competent professional (see para. 13 BIS
          Guidelines).
        </Text>{" "}
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>c)</Text>{" "}
        <Text>
          Nevertheless, the company made the decision to allocate time and
          resources in the pursuit of resolving the matter to advance both their
          business proposition; and overall knowledge and capability in the
          field.
        </Text>{" "}
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>d)</Text>{" "}
        <Text>
          It was, therefore, implicit that the state of available knowledge in
          the field did not indicate through what scientific or technological
          methods such advances could be achieved and that the development of
          similar advances would be treated as a “trade secret”. As such, had
          similar advances been made by others in the industry, the results of
          their efforts would not be, or have not been, made readily available
          at the onset of this project (See para. 11 BIS Guidelines).
        </Text>{" "}
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>e)</Text>{" "}
        <Text>
          Owing to the combination of uncertainties mentioned previously and the
          current state of knowledge or solutions that are publicly in the
          field, the answer could not be readily deduced by a competent
          professional.
        </Text>{" "}
      </View>
      <Text style={styles.subtitle}>
        Research and Development Activity Main activities
      </Text>
      <View style={styles.list2}>
        <Text style={styles.dot}>a)</Text>
        <Text>
          Development of reliable and secure platform using Software as a
          Service (SaaS) approach to the provision of websites{" "}
        </Text>
      </View>
      <View style={styles.list2}>
        <Text style={styles.dot}>b)</Text>{" "}
        <Text>
          Designed for low CPU requirements on server which improves resilience
          to DDOS attacks{" "}
        </Text>
      </View>

      <Text>
        The company started by undertaking a detailed planning exercise,
        outlining agreed timescales for technological milestones, and focusing
        on resolving the technological uncertainties surrounding the project.
      </Text>
      <Text>
        A considerable amount of our client’s time was spent on the design and
        development of a the platform which provides –{" "}
      </Text>

      <View style={styles.list3}>
        <Text style={styles.dot}>•</Text>
        <Text>Rapid build cycle enables fast creation of websites. </Text>
      </View>

      <View style={styles.list3}>
        <Text style={styles.dot}>•</Text>
        <Text>
          Encryption of content at application layer for increased security of
          customer data
        </Text>
      </View> */}
      <Text
        id="chap13"
        style={styles.title}
        bookmark={{
          title: "Chapter 5: Calculation of Relief Claim",
          fit: true,
        }}
        break
      >
        Calculation of Relief Claim
      </Text>
      <Text
        style={{
          bottom: 5,
          color: "white",
        }}
        render={({ pageNumber }) => (chap13 = pageNumber)}
      />
      <Text style={styles.subtitle}>Expenditure Summary</Text>
      <Text style={styles.para}>Accounting period Ended</Text>
      <Text style={styles.para}>31.03.2019 RESEARCH AND DEVELOPMENT</Text>
      <Text style={styles.para}>EXPENDITURE:</Text>
      {/* 5 tables here */}
      <>
        {/* {pg_calculationOfReliefClaim = pageNumber} */}
        {/* {(pg_calculationOfReliefClaim = 1)} */}
        {/* {({ pageNumber }) => (pg_calculationOfReliefClaim = pageNumber)} */}
      </>
      {/* {({ pageNumber }) => (pg_calculationOfReliefClaim = pageNumber)} */}
      <Text style={styles.subtitle}>Relief Claim Summary</Text>
      <ReportItemsTable report={report} />
      <ReportThankYouMsg />
      {/* {({ pageNumber }) => (pg_calculationOfReliefClaim = pageNumber)} */}
      {/* <Text style={styles.header} fixed>~ Created by asim ~</Text> */}
      {/* <Text
        render={({ pageNumber }) =>
          `${chap13} - ${pageNumber}`
        }
        style={styles.title}
        break
      />
      <Text
        render={({}) => `${chap13}`}
        style={styles.title}
        break
      /> */}
    </Page>
  </Document>
);

export default Report;
