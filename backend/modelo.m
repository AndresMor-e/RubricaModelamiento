function transparencia = modelo(lux)
  transparencia = max(0, min(100, 100 - 0.05 * lux));
end
