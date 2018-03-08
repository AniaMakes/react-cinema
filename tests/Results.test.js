import React from "react";
import Results from "../src/components/Results"
import renderer from 'react-test-renderer'

describe("Results", () => {
  it ("Results is rendered", () => {
    const mock = renderer.create(<Results
      results={[
        {
          "Title": "Flubber",
          "Year": "1997",
          "imdbID": "tt0119137",
          "Type": "movie",
          "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDlkOTA0OTUtOThmMi00NTMyLTg0NDgtZWZiYmRjZWI4MDY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "Title": "Son of Flubber",
          "Year": "1963",
          "imdbID": "tt0057518",
          "Type": "movie",
          "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2Zjk4MDgtYjMzYi00NzA3LWIxODktODcwYjVmOWQ1YzU2XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"
        },
        {
          "Title": "Absent Minded Inventions and the Search for Flubber with Bill Nye the Science Guy",
          "Year": "1997",
          "imdbID": "tt0432245",
          "Type": "movie",
          "Poster": "N/A"
        }
      ]}
    />).toJSON();

    expect(mock).toMatchSnapshot();

  })
})
