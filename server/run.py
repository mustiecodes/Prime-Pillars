from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)

print("🔁 REGISTERED ROUTES:")
for rule in app.url_map.iter_rules():
    print(rule)