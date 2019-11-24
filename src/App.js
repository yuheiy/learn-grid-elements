import React from "react";

const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = React.useState(0);

  React.useEffect(() => {
    const tester = document.createElement("div");
    tester.style.width = "calc(100vw - 100%)";
    document.body.append(tester);

    const onResize = () => {
      setScrollbarWidth(parseInt(getComputedStyle(tester).width));
    };
    window.addEventListener("resize", onResize);
    onResize();
  }, []);

  return scrollbarWidth;
};

function App() {
  const [containerMaxWidth, setContainerMaxWidth] = React.useState(1200);
  const [containerMargin, setContainerMargin] = React.useState(16);
  const [gridColumns, setGridColumns] = React.useState(12);
  const [gridGutter, setGridGutter] = React.useState(16);
  const scrollbarWidth = useScrollbarWidth();

  return (
    <React.Fragment>
      <style>{`
  :root {
    --container-max-width: ${containerMaxWidth};
    --container-margin: ${containerMargin};
    --grid-columns:${gridColumns};
    --grid-gutter:${gridGutter};
  }

  @media (min-width: ${containerMaxWidth +
    containerMargin * 2 +
    scrollbarWidth}px) {
    html {
      font-size: calc(1em + (100vw - ${containerMaxWidth +
        containerMargin * 2}px) * 0.005);
    }
  }
`}</style>

      <div className="stack -lg">
        <div className="container">
          <h1>Gridの構成要素</h1>
        </div>

        <div className="stack -md">
          <div className="container">
            <h2>Container</h2>
          </div>

          <div className="guide-container">
            <div className="guide-container-spacer"></div>
            <div className="guide-container-gap"></div>
            <div className="guide-container-content"></div>
            <div className="guide-container-gap"></div>
            <div className="guide-container-spacer"></div>
          </div>

          <div className="container">
            <div className="variables">
              <div className="variables-key">
                <code>--container-max-width:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={containerMaxWidth}
                  min={0}
                  max={9999}
                  onChange={event =>
                    setContainerMaxWidth(Number(event.target.value))
                  }
                />{" "}
                px
              </div>
              <div className="variables-key">
                <code>--container-margin:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={containerMargin}
                  min={0}
                  max={9999}
                  onChange={event =>
                    setContainerMargin(Number(event.target.value))
                  }
                />{" "}
                px
              </div>
            </div>
          </div>

          <div className="container">
            <pre>
              <code>{`<div class="container">
  …
</div>`}</code>
            </pre>
          </div>
        </div>

        <div className="stack -md">
          <div className="container">
            <h2>Columns</h2>
          </div>

          <div
            className="guide-grid"
            style={{
              gridTemplateColumns: Array.from(
                { length: gridColumns },
                (_, index) => index
              )
                .map(
                  index =>
                    `${index ? "calc(var(--grid-gutter) / 16 * 1rem) " : ""}1fr`
                )
                .join(" ")
            }}
          >
            {Array.from({ length: gridColumns }, (_, index) => index).map(
              index => (
                <React.Fragment key={index}>
                  {index ? <div className="guide-grid-gutter" /> : null}
                  <div className="guide-grid-column" />
                </React.Fragment>
              )
            )}
          </div>

          <div className="container">
            <div className="variables">
              <div className="variables-key">
                <code>--grid-columns:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={gridColumns}
                  min={0}
                  max={9999}
                  onChange={event => setGridColumns(Number(event.target.value))}
                />
              </div>
              <div className="variables-key">
                <code>--grid-gutter:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={gridGutter}
                  min={0}
                  max={9999}
                  onChange={event => setGridGutter(Number(event.target.value))}
                />{" "}
                px
              </div>
            </div>
          </div>

          <div className="container">
            <pre>
              <code>{`<div class="row">
  <div class="col -s3">…</div>
  <div class="col -s3">…</div>
  <div class="col -s3">…</div>
</div>`}</code>
            </pre>
          </div>
        </div>

        <div className="stack -md">
          <div className="container">
            <h2>Composed</h2>
          </div>

          <div className="guide-container">
            <div className="guide-container-spacer"></div>
            <div className="guide-container-gap"></div>
            <div
              className="guide-container-content"
              style={{ backgroundColor: "transparent" }}
            >
              <div
                className="guide-grid"
                style={{
                  gridTemplateColumns: Array.from(
                    { length: gridColumns },
                    (_, index) => index
                  )
                    .map(
                      index =>
                        `${
                          index ? "calc(var(--grid-gutter) / 16 * 1rem) " : ""
                        }1fr`
                    )
                    .join(" ")
                }}
              >
                {Array.from({ length: gridColumns }, (_, index) => index).map(
                  index => (
                    <React.Fragment key={index}>
                      {index ? <div className="guide-grid-gutter" /> : null}
                      <div className="guide-grid-column" />
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
            <div className="guide-container-gap"></div>
            <div className="guide-container-spacer"></div>
          </div>

          <div className="container">
            <div className="variables">
              <div className="variables-key">
                <code>--container-max-width:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={containerMaxWidth}
                  min={0}
                  max={9999}
                  onChange={event =>
                    setContainerMaxWidth(Number(event.target.value))
                  }
                />{" "}
                px
              </div>
              <div className="variables-key">
                <code>--container-margin:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={containerMargin}
                  min={0}
                  max={9999}
                  onChange={event =>
                    setContainerMargin(Number(event.target.value))
                  }
                />{" "}
                px
              </div>
              <div className="variables-key">
                <code>--grid-columns:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={gridColumns}
                  min={0}
                  max={9999}
                  onChange={event => setGridColumns(Number(event.target.value))}
                />
              </div>
              <div className="variables-key">
                <code>--grid-gutter:</code>
              </div>
              <div className="variables-value">
                <input
                  type="number"
                  value={gridGutter}
                  min={0}
                  max={9999}
                  onChange={event => setGridGutter(Number(event.target.value))}
                />{" "}
                px
              </div>
            </div>
          </div>

          <div className="container">
            <pre>
              <code>{`<div class="container">
  <div class="row">
    <div class="col -s3">…</div>
    <div class="col -s3">…</div>
    <div class="col -s3">…</div>
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
