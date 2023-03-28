import { useState, useEffect, useCallback } from 'react';
import { Spin } from 'antd';
import Search from 'antd/es/input/Search';
import axios from "axios";
import groupBy from "lodash-es/groupBy";

function App() {
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const highlight = useCallback((text) => {

    var index = text?.indexOf(search);
    if (index >= 0) {
      return <div style={{ display: "inline" }}>
        {text.substring(0, index)}
        <span style={{ color: "red" }}>{text.substring(index, index + search.length)}</span>{
          text.substring(index + search.length)}
      </div>
    }
    return <div style={{ display: "inline" }}>{text}</div>
  }, [search])

  useEffect(() => {
    if (search.trim()) {
      setIsLoading(true);
      axios.get(`https://culablimsdemo.controlunion.com/Search/${search.trim()}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response: any) => {
          // groupBy(response.data,"A");
          let groupByCompany = groupBy(response.data, "Entity_EU_ReferenceNumber");
          setData(groupByCompany);
          setIsLoading(false);
          return response.data;
        })
    }
    else {
      setIsLoading(false);
    }
  }, [search]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 30,
      }}
    >
      <div style={{ width: 500, marginBottom: 5 }}>
        <Search
          placeholder="input search text"
          onSearch={(value) => {
            setSearch(value)

          }}
          enterButton
        />
      </div>
      <div>
        <Spin tip="Loading" size="large" spinning={isLoading}>
          {
            !isLoading && data &&
            <>
              {/* <div style={{ padding: "20px 0px" }}>
                <b>Total Items : </b> {Object.keys(data).length}
              </div> */}
              {
                Object.keys(data).map(
                  key => {
                    console.log("data[key]", data[key]);
                    return <div style={{ paddingBottom: "20px" }}>
                      <div style={{
                        color: "#4040a2"
                      }}><b>EU reference number: </b>{highlight(key)}</div>
                      <div><b>Legal basis: </b>{highlight(data[key][0]["Entity_Regulation_NumberTitle"])}</div>
                      <div><b>Programme: </b>{highlight(data[key][0]["NameAlias_Regulation_Programme"])}</div>
                      <div><b>Identity information: </b></div>
                      {
                        data[key].map(
                          row => {
                            return <ul style={{ paddingBottom: "0px", marginTop: "2px", marginBottom: "2px" }}>
                              {
                                row["NameAlias_WholeName"] && <li><b>Name/Alias: </b>{highlight(row["NameAlias_WholeName"])} {row["NameAlias_Function"] ? <><b>Function: </b>{highlight(row["NameAlias_Function"])}</> : <></>} {row["NameAlias_Remark"] ? <><b>Remark: </b>{highlight(row["NameAlias_Remark"])}</> : <></>}</li>
                              }
                            </ul>
                          }
                        )
                      }
                      <div><b>Birth information: </b></div>
                      {
                        data[key].map(
                          row => {
                            return <ul style={{ paddingBottom: "0px", marginTop: "2px", marginBottom: "2px" }}>
                              {
                                row["BirthDate_Day"] && <li><b>Birth date: </b>{highlight(row["BirthDate_Day"])}/{row["BirthDate_Month"]}/{row["BirthDate_Year"]} {row["BirthDate_CountryDescription"] ? <><b>Birth place: </b>{highlight(row["BirthDate_CountryDescription"])}, {row["BirthDate_City"]}</> : <></>}  {row["BirthDate_Remark"] ? <><b>Remark: </b>{row["BirthDate_Remark"]}</> : <></>}</li>
                              }
                              {
                                row["BirthDate_YearRangeFrom"] && <li><b>Birth date: </b>Circa from {row["BirthDate_YearRangeFrom"]} to {row["BirthDate_YearRangeTo"]} {row["BirthDate_CountryDescription"] ? <><b>Birth place: </b>{highlight(row["BirthDate_CountryDescription"])}, {highlight(row["BirthDate_City"])}</> : <></>} </li>
                              }
                            </ul>
                          }
                        )
                      }
                      <div><b>Citizenship information: </b></div>
                      {
                        data[key].map(
                          row => {
                            return <ul style={{ paddingBottom: "0px", marginTop: "2px", marginBottom: "2px" }}>
                              {
                                row["Citizenship_CountryIso2Code"] && <li><b>Citizenship: </b>{highlight(row["Citizenship_CountryIso2Code"])}</li>
                              }
                            </ul>
                          }
                        )
                      }
                      <div><b>Contact information: </b></div>
                      {
                        data[key].map(
                          row => {
                            return <ul style={{ paddingBottom: "0px", marginTop: "2px", marginBottom: "2px" }}>
                              {
                                row["Address_CountryDescription"] && <li><b>Address: </b>{highlight(row["Address_CountryDescription"])}, {highlight(row["Address_City"])}, {highlight(row["Address_Street"])} </li>
                              }
                            </ul>
                          }
                        )
                      }
                      <div><b>Remark: </b>{highlight(data[key][0]["Entity_Remark"])}</div>
                    </div>
                  }
                )
              }
            </>
          }
        </Spin>
      </div>
    </div>
  );
}

export default App;
