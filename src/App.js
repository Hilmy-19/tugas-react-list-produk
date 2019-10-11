import React from "react";
import { Button, SVGIcon } from "react-md";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nbarang: "",
      jumlah: "",
      tharga: "",
      data: [],
      iniEdit: false,
      editNo: null
    };

    this.tambah = this.tambah.bind(this);
  }
  handleEdit(item, nomor) {
    var data = this.state.data;
    this.setState({
      nbarang: item.nbarang,
      jumlah: item.jumlah,
      tharga: item.tharga,
      iniEdit: true,
      editNo: nomor
    });
  }

  handleDelete(nomor) {
    var data = this.state.data;
    data.splice(nomor);
    this.setState({
      data: data
    });
  }

  tambah(e) {
    var editbukan = this.state.iniEdit;
    if (editbukan) {
      var data = this.state.data;
      var nbarang = this.state.nbarang;
      var jumlah = this.state.jumlah;
      var tharga = this.state.tharga;

      var item = data[this.state.editNo];
      item.nbarang = nbarang;
      item.jumlah = jumlah;
      item.tharga = tharga;
      this.setState({
        data: data
      });
    } else {
      var data = this.state.data;
      var nbarang = this.state.nbarang;
      var jumlah = this.state.jumlah;
      var tharga = this.state.tharga;

      var item = {};
      item.nbarang = nbarang;
      item.jumlah = jumlah;
      item.tharga = tharga;
      data.push(item);

      this.setState({
        nbarang: e.target.value,
        jumlah: e.target.value,
        tharga: e.target.value
      });

      console.log(data);
    }
  }

  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-md@1.12.3/dist/react-md.indigo-pink.min.css"
          />
        </head>
        <body>
          <h1>TUNAS JAYA SHOP</h1>
          <div className="kotak">
            <p className="judul_kotak">Barang yang akan dibeli:</p>
            <form>
              <center>
                <label>Nama barang:</label>
                <input
                  className="isian"
                  type="text"
                  placeholder="barang..."
                  id="nbarang"
                  value={this.state.nbarang}
                  onChange={e => {
                    var value = e.target.value;
                    this.setState({
                      nbarang: value
                    });
                  }}
                />
                <label>Jumlah:</label>
                <input
                  className="isian"
                  type="text"
                  placeholder="jumlah..."
                  id="jumlah"
                  value={this.state.jumlah}
                  onChange={e => {
                    var value = e.target.value;
                    this.setState({
                      jumlah: value
                    });
                  }}
                />
                <label>Harga:</label>
                <input
                  className="isian"
                  type="text"
                  placeholder="harga..."
                  id="tharga"
                  value={this.state.tharga}
                  onChange={e => {
                    var value = e.target.value;
                    this.setState({
                      tharga: value
                    });
                  }}
                />
              </center>
            </form>
            <br />
            <center>
              <Button raised onClick={this.tambah.bind(this)}>
                add to cart
              </Button>
            </center>
          </div>
          <br />
          <center>
            <table className="tabel">
              <tr>
                <th>NAMA BARANG</th>
                <th>JUMLAH</th>
                <th>HARGA</th>
              </tr>
              {this.state.data.map((item, nomor) => {
                return (
                  <tr>
                    <td>{item.nbarang}</td>
                    <td>{item.jumlah}</td>
                    <td>{item.tharga}</td>
                    <td>
                      <Button
                        flat
                        primary
                        swapTheming
                        onClick={this.handleEdit.bind(this, item, nomor)}
                      >
                        edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        flat
                        secondary
                        swapTheming
                        onClick={this.handleDelete.bind(this, nomor)}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <table className="tabel">
              <tr>
                <th>TOTAL BARANG</th>
                <th>TOTAL HARGA</th>
              </tr>
              {this.state.data.map((item, nomor) => {
                return (
                  <tr>
                    <td className="baris_tabel2">1</td>
                    <td className="baris_tabel2">{item.tharga}</td>
                  </tr>
                );
              })}
            </table>
          </center>
          <script src="https://unpkg.com/react/dist/react.min.js"></script>
          <script src="https://unpkg.com/react-dom/dist/react-dom.min.js"></script>
          <script src="https://unpkg.com/react-addons-css-transition-group/dist/react-addons-css-transition-group.min.js"></script>
          <script src="https://unpkg.com/react-addons-transition-group/dist/react-addons-transition-group.min.js"></script>
          <script src="https://unpkg.com/react-md@1.12.3/dist/react-md.min.js"></script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    );
  }
}

export default App;
