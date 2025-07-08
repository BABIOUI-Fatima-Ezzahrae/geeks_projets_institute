CREATE TABLE exchange_rates (
    id SERIAL PRIMARY KEY,
    from_currency VARCHAR(10),
    to_currency VARCHAR(10),
    original_amount FLOAT,
    converted_amount FLOAT,
    converted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

