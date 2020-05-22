import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class TestConnect {


private static final String POST_URL = "https://api.boomi.com/api/rest/v1/trainingdivyanshjain-HIGX0E/DeployedPackage/";

private static final String POST_PARAMS = "{\n" + "\"environmentId\" : \"56cb69d9-bc3b-459d-9594-6291aa0339dc\",\r\n" + "\"packageId\" : \"056f5082-e96f-46d1-9268-49d19d45614e\",\r\n" + "\"notes\" : \"Package Deployed\"" + "\n}";

public static void main(String[] args) throws IOException {


sendPOST();
System.out.println("POST DONE");
}

private static void sendPOST() throws IOException {
URL obj = new URL(POST_URL);
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
con.setRequestProperty("Accept", "application/json");
con.setRequestProperty("Content-Type", "application/json");
con.setRequestProperty("Authorization", "Basic ZGl2eWFuc2guamFpbkBuZW9zYWxwaGEuY29tOkRqQDE3MDkxOTk3");

// For POST only - START
con.setDoOutput(true);
OutputStream os = con.getOutputStream();
os.write(POST_PARAMS.getBytes());
os.flush();
os.close();
// For POST only - END

int responseCode = con.getResponseCode();
System.out.println("POST Response Code :: " + responseCode);

if (responseCode == HttpURLConnection.HTTP_OK) { //success
BufferedReader in = new BufferedReader(new InputStreamReader(
con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();

while ((inputLine = in.readLine()) != null) {
response.append(inputLine);
}
in.close();

// print result
System.out.println(response.toString());
} else {
System.out.println("POST request not worked");
}
}

}