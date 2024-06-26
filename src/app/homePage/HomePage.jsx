import React from "react";
import Banner from "../../components/banner/Banner";
import TopCategory from "../../components/topCategory/TopCategory";
import MoreExplore from "../../components/moreExplore/MoreExplore";
import CompanyLogo from "../../components/companyLogo/CompanyLogo";
import TopSeller from "../../components/topSeller/TopSeller";
import Articles from "../../components/articles/Articles";
import CustomerService from "../../components/customerService/CustomerService";
import NewArrivals from "../../components/newArrivals/NewArrivals";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCategory></TopCategory>
      <NewArrivals></NewArrivals>
      <MoreExplore></MoreExplore>
      <CompanyLogo></CompanyLogo>
      <TopSeller></TopSeller>
      <Articles></Articles>
      <CustomerService></CustomerService>
    </div>
  );
};

export default HomePage;
