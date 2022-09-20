"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourseService = void 0;
const CreateCourseService_1 = require("./CreateCourseService");
function createCourseService(request, response) {
    CreateCourseService_1.CreateCourseService.execute("NodeJS", 10, "Dani");
    return response.send();
}
exports.createCourseService = createCourseService;
