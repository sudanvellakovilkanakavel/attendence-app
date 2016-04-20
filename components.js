//1.MainComponent Starts

var MainComponent = React.createClass({

	render: function()  {

		return(
         
           <div>

         <HeadComponent  />

          <BodyComponent />

            </div>

			);

	}


});

//1.MainComponent ends


//1.1.HeadComponent Starts

var HeadComponent = React.createClass({

    render: function()  {

       return(

        <div>
    
        <TitleComponent />
        <SearchComponent  />
      

        </div>


       	);

    }

});

//1.1.HeadComponents ends


//1.1.1.TitleComponent Starts

var TitleComponent = React.createClass({

	render: function() {

     return (

          <h2>

     Employee Attendence table

          </h2>

     	);

	}




});

//1.1.1.TitleComponent ends


//1.1.2.SearchComponent Starts

var SearchComponent = React.createClass({

	render: function() {

     return (

          <form>

     <input type="text"  placeholder="Search for attendence" />

          </form>

     	);

	}




});


//1.1.2.SearchComponent ends


//1.2.BodyComponent Starts




//1.2.BodyComponent ends



ReactDom.render(

<MainComponent  />,
document.getElementById('app')

	);


