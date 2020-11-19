/* eslint arrow-body-style: ["error", "as-needed"] */

import { Line } from "rc-progress";
import React, { useCallback, useEffect } from "react";
import CountUp from "react-countup";
import { useHistory } from "react-router-dom";

import noImage from "../../assets/noimage.jpeg";
import { useSWRCustom } from "../../service/api";
import { Container, ExploreVaquinha } from "./styles";

const Exploring: React.FC = () => {
  const { data, revalidate } = useSWRCustom("/vaquinha", {
    sort: "contribuicoes",
  });
  const history = useHistory();

  revalidate();
  const calcPercent = (item) => (item.bitCows / item.meta) * 100;
  // {
  //   let ammount: number = 0;

  //   Object.keys(item.contribuidores).forEach((u) => {
  //     ammount += item.contribuidores[u];
  //   });

  //   console.log(
  //     `ammount=${ammount}, meta=${item.meta}, percent=${
  //       (ammount / item.meta) * 100
  //     }`,
  //   );
  //   return (item.bitCows / item.meta) * 100;
  // };

  const handleClick = useCallback(
    (vaquinhaId) => {
      history.push(`/vaquinha/${vaquinhaId}`);
    },
    [history],
  );

  useEffect(() => {}, [data]);

  if (data) {
    return (
      <Container>
        {data.map((item) => (
          <ExploreVaquinha key={item._id} onClick={() => handleClick(item._id)}>
            <img src={noImage} alt="No img" />
            <div className="content">
              <div className="body">
                <h1>{item.titulo}</h1>
                <h3>{item.descricaoCurta}</h3>
              </div>
              <div className="footer">
                <span>Meta</span>
                <CountUp
                  end={item.meta}
                  prefix="R$ "
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={3}
                />
              </div>
              <div className="bar">
                <Line
                  percent={calcPercent(item)}
                  strokeWidth={1.5}
                  strokeColor="#2B9A48"
                  trailColor="#D8D8D8"
                />
                {/* <Redirect to={`./vaquinha/${item._id}`} /> */}
                {/* <button type="button">Ver mais</button> */}
                {/* <a href={`./vaquinha/${item._id}`}>Ver mais</a> */}
              </div>
            </div>
          </ExploreVaquinha>
        ))}
      </Container>
    );
  }
  return <Container />;
};

export default Exploring;
