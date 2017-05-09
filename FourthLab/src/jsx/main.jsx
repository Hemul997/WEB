var App = React.createClass({
    render: function () {
        return (
            <div className="main-content clearfix">
                <Canvas />
                <Information />
                <SettingsForm />
            </div>
        );
    }
});


var Canvas = React.createClass({
    render: function () {
        return (
            <canvas height="500" width="800" id="canvas" className="canvas"></canvas>
        );
    }
});


var Information = React.createClass({
    render: function () {
        return (
            <div className="block-info">
                <div id="area">Area: </div>
                <div id="perimeter">Perimeter: </div>
            </div>
        );
    }
});

var SettingsForm = React.createClass({
    render: function () {
        return (
            <form action="#" id="form" className="form">
                <List />
                <div className="form-group">
                    <label htmlFor="fill" className="value">Fill: </label>
                    <input type="text" defaultValue="#f1f8fe" id="fill" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="border" className="value">Border: </label>
                    <input type="text" defaultValue="#00223d" id="border" className="form-control" />
                </div>
                <CircleBlock />
                <TriangleBlock />
                <RectangleBlock />
            </form>
        );
    }
});


var List = React.createClass({
    render: function () {
        return (
            <div className="form-group">
                <select id="shape" className="form-control" name="list">
                    <option value="Circle">Circle</option>
                    <option value="Triangle">Triangle</option>
                    <option value="Rectangle">Rectangle</option>
                </select>
            </div>
        );
    }
});



var CircleBlock = React.createClass({
    render: function () {
        return (
            <div className="open" id="circleBlock">
                <div className="form-group">
                    <label htmlFor="radius" className="value" >Radius: </label>
                    <input type="text" defaultValue="20" id="radius" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="circleX" className="value">X: </label>
                    <input type="text" defaultValue="50" id="circleX" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="circleY" className="value">Y: </label>
                    <input type="text" defaultValue="50" id="circleY" className="form-control" />
                </div>
            </div>
        );
    }
});


var TriangleBlock = React.createClass({
    render: function () {
        return (
            <div className="hidden" id="triangleBlock">
                <div className="form-group">
                    <label htmlFor="triangleX1" className="value">X1: </label>
                    <input type="text" defaultValue="10" id="triangleX1" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="triangleY1" className="value">Y1: </label>
                    <input type="text" defaultValue="10" id="triangleY1" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="triangleX2" className="value">X2: </label>
                    <input type="text" defaultValue="80" id="triangleX2" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="triangleY2" className="value">Y2: </label>
                    <input type="text" defaultValue="90" id="triangleY2" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="triangleX3" className="value">X3: </label>
                    <input type="text" defaultValue="20" id="triangleX3" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="triangleY3" className="value">Y3: </label>
                    <input type="text" defaultValue="80" id="triangleY3" className="form-control" />
                </div>
            </div>
        );
    }
});



var RectangleBlock = React.createClass({
    render: function () {
        return (
            <div className="hidden" id="rectangleBlock">
                <div className="form-group">
                    <label htmlFor="rectangleX1" className="value">X1: </label>
                    <input type="text" defaultValue="10" id="rectangleX1" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="rectangleY1" className="value">Y1: </label>
                    <input type="text" defaultValue="10" id="rectangleY1" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="rectangleX2" className="value">X2: </label>
                    <input type="text" defaultValue="100" id="rectangleX2" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="rectangleY2" className="value">Y2: </label>
                    <input type="text" defaultValue="100" id="rectangleY2" className="form-control" />
                </div>
            </div>
        );
    }
});


ReactDOM.render(<App />, document.body);
