import React from "react";
import FormNewsAdd from "./FormNewsAdd";
import NewsItem from "./NewsItem";

class ListNews extends React.Component{
    render(){
        return(<div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover ">
            <thead>
                <tr>
                    <th style={{ width: "10%" }} className="text-center">#</th>
                    <th>Name</th>
                    <th style={{ width: "15%" }} className="text-center">Level</th>
                    <th style={{ width: "15%" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                <NewsItem id="1" name="Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết" level="High"/>
                <NewsItem id="2" name="Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018" level="Small"/>
                <NewsItem id="3" name="Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo" level="Medium"/>
                <NewsItem id="4" name="Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết" level="Medium"/>
                <NewsItem id="5" name="VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết" level="Medium"/>
                <FormNewsAdd id="6" name="F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020"/>
            </tbody>
        </table>
    </div>);
    }
}

export default ListNews;