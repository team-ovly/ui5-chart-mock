sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {

	var oMock = {
		init: function () {

			var oMockServer = new MockServer({
				rootUri: "/here/goes/your/serviceurl/"
			});

			window.mockServer = oMockServer;
			
			oMockServer.simulate("./localService/metadata.xml", "./localService/mockdata");
			
			oMockServer.start();
		}
	};

	return oMock;

});