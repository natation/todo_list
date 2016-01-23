/**
 * Created by vicchen on 1/12/16.
 */
import should from 'should';
import assert from 'assert';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import SearchBar from '../src/components/search_bar';

jsdom(); // Provide a DOM for ReactJS

describe('Test Framework', function () {
  it('should have mocha installed and running.', function () {
    assert.equal(true, true);
  })
  it('should have the should library installed and running for fluent testing.', function () {
    true.should.eql(true);
  })
});

describe ('Async testing', function () {
  var result = false;

  beforeEach( function (done) {
    setTimeout ( function () {
      var somethingHere = 21;
      var somethingElse = 'check';
      result = true;
      done();
    });
  }, 2000);

  it ('should NOT be so hard so this makes it easier.', function (done) {

    var hi = SearchBar;
    //const ExampleComponentFactory = React.createFactory(Component);
    //let example = ReactTestUtils.renderIntoDocument(ExampleComponentFactory({}));
    result.should.eql(true);
    done();
  });
});


describe('Products list component test', function(){

  beforeEach(function() {

  });



  it('Should render products list', function(){
    const searchBar = ReactTestUtils.renderIntoDocument(<SearchBar />);
    // ...
    const searchBarDOM = ReactTestUtils.scryRenderedDOMComponentsWithClass(searchBar, 'meow');
    //searchBarDOM.should.have.lengthOf(1);
    //searchBarDOM[0].should.not.be.empty;
    searchBarDOM[0].textContent.should.be.equal('Value of the input: Starting Value');
  });

  it('Shallow Render', function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<SearchBar />);
    const output = renderer.getRenderOutput();
    (output.type).should.equal('div');
    (output.props.className).should.equal('meow');
  });

});
