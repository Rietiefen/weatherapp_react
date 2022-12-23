import "./searchbox.css";

export default function Searchbox() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="searchBar">
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2 enteracity">
              <input
                type="text"
                class="form-control"
                id="inputacity"
                placeholder="enter a city"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2 submitbutton">
              🔍
            </button>
          </form>
          <button id="currentlocation"> Current </button>
        </div>
      </div>
    </div>
  );
}
